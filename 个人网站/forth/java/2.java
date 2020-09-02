package text.ajax.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/2")
public class LoginServlet extends HttpServlet{

	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html;charset=utf-8");
		PrintWriter writer=resp.getWriter();
		String msg="";
		String username=req.getParameter("username");	
		String password=req.getParameter("password");
		if("YuelinWang".equals(username)&&"189857570wyl.".equals(password)) {
			msg="登陆成功";
		}else {
			msg="用户名或者密码错误";
		}
		writer.write(msg);
	}
}

