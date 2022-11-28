<!-- <%@ page language = "java" contentType = "text/html; charset = ISO-8859-1"
   pageEncoding = "ISO-8859-1"%>
<%@ taglib prefix = "s" uri = "/struts-tags"%> -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "!#">

<html>
   <head>
      <title>Spotify login</title>
   </head>

   <body>
      <s:form action = "userinfo" method = "Agree & Join">
         <s:textfield name = "Email or phone" label = "mail/pass"/>
         <s:textfield name = "password" label = "pass"/>
         <s:submit name = "Login" label = "Submit" align="center" />
      </s:form>
   </body>
</html>