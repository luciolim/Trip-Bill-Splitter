package com.split.expenses.domain.dtos;

import com.split.expenses.domain.entities.User;
import lombok.Getter;

@Getter
public class UserAutheticatedDTO {

    private String type;
    private String email;
    private String name;
    private String token;

    public UserAutheticatedDTO(String email, String name, String token, String type) {

        this.email = email;
        this.name = name;
        this.token = token;
        this.type = type;
    }

    public UserAutheticatedDTO(){}

    public static UserAutheticatedDTO toDTO(User user, String type) {
        return new UserAutheticatedDTO(user.getEmail(), user.getName(), user.getToken(), type);
    }


}
