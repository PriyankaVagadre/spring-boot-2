package em_backend.example.employee_m.services.impl;

import em_backend.example.employee_m.dto.EmployeeDto;
import em_backend.example.employee_m.entity.Employee;
import em_backend.example.employee_m.exception.ResouceNotFoundException;
import em_backend.example.employee_m.mapper.EmployeeMapper;
import em_backend.example.employee_m.repository.EmployeeRepository;
import em_backend.example.employee_m.services.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public EmployeeDto getEmployee(Long employeeId) {
       Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()-> new ResouceNotFoundException("Employee Not found" + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return  employees.stream().map(EmployeeMapper::mapToEmployeeDto)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
       Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ResouceNotFoundException("Employee Not found" + employeeId));

       employee.setFirstName(updatedEmployee.getFirstName());
       employee.setLastName(updatedEmployee.getLastName());
       employee.setEmail(updatedEmployee.getEmail());

       Employee updatedEmployeeData = employeeRepository.save(employee);

       return EmployeeMapper.mapToEmployeeDto(updatedEmployeeData);
    }

    @Override
    public EmployeeDto deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                ()-> new ResouceNotFoundException("Employee Not found" + employeeId)
        );

        employeeRepository.delete(employee);

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

}
