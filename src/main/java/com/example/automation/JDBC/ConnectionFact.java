package com.example.automation.JDBC;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFact {
	
	String driverClassName = "com.mysql.jdbc.Driver";
	String connectionUrl = "jdbc:mysql://13.126.31.111:3306/automation";
	String dbUser = "root";
	String dbPwd = "core@123";

	private static ConnectionFact connectionFactory = null;

	private ConnectionFact() {
		try {
			Class.forName(driverClassName);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

	public Connection getConnection() throws SQLException {
		Connection conn = null;
		conn = DriverManager.getConnection(connectionUrl, dbUser, dbPwd);
		return conn;
	}

	
	public static ConnectionFact getInstance() {
		if (connectionFactory == null) {
			connectionFactory = new ConnectionFact(); 
		}
		return connectionFactory;
	}
}

