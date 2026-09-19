package em_backend.example.employee_m.services;

import em_backend.example.employee_m.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployee(Long employeeId);
    List<EmployeeDto> getAllEmployees();
}
