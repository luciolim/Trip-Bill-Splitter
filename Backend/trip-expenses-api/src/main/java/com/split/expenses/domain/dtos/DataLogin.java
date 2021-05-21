package com.split.expenses.domain.dtos;



public class DataLogin {

    private String email;
    private String password;

    public DataLogin() {

    }

    public DataLogin(String email, String password) {
        this.email = email;
        this.password = password;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
