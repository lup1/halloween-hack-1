/*Sarah Phung Nola Watson Lana Abdelmohsen
ServerSocket via channels
WebServer_cb - Part II of C
*/
import java.io.* ;
import java.net.* ;
import java.util.* ;
import java.nio.channels.*;


public class WebServer_cb 
{
  public static void main(String[] args) 
  {
    try
    {
      //declare new port #
      int port = 8888; 
      SocketAddress localport = new InetSocketAddress(port);

      //create & bind server socket channel to listen for client connections
      ServerSocketChannel tcpserver = ServerSocketChannel.open();
    	tcpserver.socket().bind(localport);

      //selector allows us to block while waiting for activity
      Selector selector = Selector.open(); 
    	
      //specify non blocking mode
    	tcpserver.configureBlocking(false);

      //registers the channels with the selector
    	tcpserver.register (selector, SelectionKey.OP_ACCEPT);
      //(debug)System.out.println ("Server started on port #: " + port);

      //processing client connections
    	while (true) //**NEED COMMENTS HERE ***
    	{
        	try 
          { 
            //creating a selector 
            selector.select();  
            //to access the ready channels 
        		Set keys = selector.selectedKeys();
            //iterate through the selected key to access ready channels
            for (Iterator i = keys.iterator(); i.hasNext();)
            {
              SelectionKey key = (SelectionKey) i.next(); 
              i.remove(); 


              if (key.isAcceptable()) //client connection was accepted by a ServerSocketChannel 
              {
                SocketChannel client = tcpserver.accept(); 
                Socket client_socket = client.socket();
                int port_number = client_socket.getLocalPort();
                //(debug)System.out.println("Client successfully connected " + port_number);

                //Process HTTP request & start thread
                HttpRequest request = new HttpRequest (client_socket);
                Thread thread = new Thread (request);
                thread.start();
              }
        		}
          }
          catch (Exception e)
          {
              e.printStackTrace();
          }
    	}
    }
    catch (Exception e)
    {
        System.out.println (e);
    }
  }
}

/* ***** PART C: define class MovedRequest that implements Runnable ***** */
final class MovedRequest implements Runnable
{
  final static String CRLF = "\r\n";
  Socket socket;

  //Constructor
  public MovedRequest(Socket socket) throws Exception
  {
    this.socket = socket; 
  }

  public void run()
  {
    try 
    {
      processResponse(); 
    }
    catch (Exception e)
    {
      System.out.println (e);
    }
  }

  private void processResponse() throws Exception
  {
    //server outstream buffer
    DataOutputStream os = new DataOutputStream(socket.getOutputStream()); 
    
    String statusLine = null;
    String referer = null; 
    
    statusLine = "HTTP/1.1 301 Moved Permanently" + CRLF;
    referer = "Location: http://www.google.com/";

    //send out statusLine
    os.writeBytes(statusLine);
    //send out location URL
    os.writeBytes(referer);

    //send empty line to indicate end of header
    os.writeBytes(CRLF);

    os.close();
    socket.close();

  }

}

/* ***** PART A & B ***** */
final class HttpRequest implements Runnable 
{
  final static String CRLF = "\r\n";
  Socket socket;
  
  // Constructor
  public HttpRequest(Socket socket) throws Exception 
  {
    this.socket = socket;
  }
  
  // Implement the run() method of the Runnable interface.
  public void run() 
  {
    try 
    {
      processRequest();
    } 
    catch (Exception e) 
    {
      System.out.println(e);
    }
  }
  
  private void processRequest() throws Exception  
  {
    //reference to socket's input/out streams
    InputStream is = socket.getInputStream();
    DataOutputStream os = new DataOutputStream(socket.getOutputStream());

    //set up input stream filters
    BufferedReader br = new BufferedReader(new InputStreamReader(is));

    //get HTTP request line message
    String requestLine = br.readLine();

    /* DEBUG
    //display request line
    System.out.println();
    System.out.println(requestLine);
    //display header lines
    String headerLine = null;
    while ((headerLine = br.readLine()).length() != 0) 
    {
      System.out.println(headerLine);
    }
    */

    //extract fileName from HTTP request line
    StringTokenizer tokens = new StringTokenizer(requestLine);
    tokens.nextToken(); // skip "GET" in request line
    String fileName = tokens.nextToken();
    //prepend "." to get current directory
    fileName = "." + fileName;

    //open requested file if exists
    FileInputStream fis = null;
    boolean fileExists = true;
    try 
    {
      fis = new FileInputStream(fileName);
    } 
    catch (FileNotFoundException e) 
    {
      fileExists = false;
    }

    // ** construct HTTP response message **
    String statusLine = null;
    String contentTypeLine = null;
    String entityBody = null;
    
    if (fileExists) //200 0K
    {
      statusLine = "HTTP/1.1 200 OK" + CRLF;
      contentTypeLine = "Content-type: " + contentType( fileName ) + CRLF;
    }
    else // 404 NOT FOUND
    {
      statusLine = "HTTP/1.1 404 Not Found" + CRLF;
      contentTypeLine = "Content-type: " + contentType( fileName ) + CRLF;
      entityBody = "<HTML>" + "<HEAD><TITLE>Not Found</TITLE></HEAD>" + "<BODY>Not Found</BODY></HTML>";
    }

    // send status line
    os.writeBytes(statusLine);
    // send content line 
    os.writeBytes(contentTypeLine);
    // send new line = end of header
    os.writeBytes(CRLF);

    // send entity body
    if (fileExists)
    {
      sendBytes(fis, os);
      fis.close();
    } 
    else 
    {
      os.writeBytes(entityBody);
    }

    // close socket & streams
    os.close();
    br.close();
    socket.close();
  }

/* ***** method that returns MIME content type by evaluating extension ***** */
  private static String contentType(String fileName) 
  {
    // ** HTML **
    if(fileName.endsWith(".htm") || fileName.endsWith(".html")) 
    {
      return "text/html";
    }
    // ** JPEG **
    if(fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) 
    {
      return "image/jpeg";
    }
    // ** GIF **
    if(fileName.endsWith("gif")) 
    {
      return "image/gif";
    }
    // ** MPG4 **
    if (fileName.endsWith(".mp4"))
    {
      return "video/mpg4";
    }
    return "application/octet-stream";
  }

/* ***** method that sends bytes through output buffer ***** */
  private static void sendBytes(FileInputStream fis, OutputStream os) throws Exception 
  {
    // 1K buffer to hold bytes on the way to socket
    byte[] buffer = new byte[1024];
    int bytes = 0;
    
    //requested file copied into socket's output stream socket
    while((bytes = fis.read(buffer)) != -1) 
    {
      os.write(buffer, 0, bytes);
    }
  }
}










