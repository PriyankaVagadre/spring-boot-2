package em_backend.example.employee_m.services.impl;

import em_backend.example.employee_m.dto.EmployeeDto;
import em_backend.example.employee_m.entity.Employee;
import em_backend.example.employee_m.mapper.EmployeeMapper;
import em_backend.example.employee_m.repository.EmployeeRepository;
import em_backend.example.employee_m.services.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
