package em_backend.example.employee_m.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResouceNotFoundException extends RuntimeException{
    public ResouceNotFoundException(String message) {
        super(message);
    }
}
