package com.split.expenses.domain.services;

import com.split.expenses.domain.dtos.DataLogin;
import com.split.expenses.domain.entities.User;
import com.split.expenses.domain.exceptions.ExistingEmailException;
import com.split.expenses.domain.exceptions.ExpiredTokenException;
import com.split.expenses.domain.exceptions.InvalidLoginException;
import com.split.expenses.domain.exceptions.InvalidTokenException;
import com.split.expenses.domain.repositories.UserRepository;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;


//Class used to implement user authentication 
@Service
public class UserAuthenticationService {

    private final UserRepository userRepository;
    private final TokenService tokenService;

    @Autowired
    public UserAuthenticationService(UserRepository userRepository, TokenService tokenService){
        this.userRepository = userRepository;
        this.tokenService = tokenService;
    }


    public User authenticate(DataLogin dados, String token){
        User user = userRepository.findByEmail(dados.getEmail()).orElseThrow(ExistingEmailException::new);
        if(dados.getPassword().equals(user.getPassword()) && !token.isEmpty() && validate(token)) {
            return user;
        }
        else {
            throw new InvalidLoginException();
        }
    }

    private boolean validate(String token) {
        try {
            String tokenTratado = token.replace("Bearer ", "");
            Claims claims = tokenService.decodeToken(tokenTratado);

            System.out.println(claims.getIssuer());
            System.out.println(claims.getIssuedAt());
            //Verify if token is expired
            if (claims.getExpiration().before(new Date(System.currentTimeMillis()))) throw new ExpiredTokenException();
            System.out.println(claims.getExpiration());
            return true;
        } catch (ExpiredTokenException et){
            et.printStackTrace();
            throw et;
        } catch (Exception e) {
            e.printStackTrace();
            throw new InvalidTokenException();
        }

    }


}
