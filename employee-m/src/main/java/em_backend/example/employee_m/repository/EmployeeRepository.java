package em_backend.example.employee_m.repository;

import em_backend.example.employee_m.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
