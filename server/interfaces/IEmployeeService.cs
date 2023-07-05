using authorization.models;

namespace authorization.interfaces
{
    public interface IEmployeeService
    {
        Task<Employee> AddEmployee(Employee employee);
        Task<List<Employee>> GetAllEmployees();
    }
}
