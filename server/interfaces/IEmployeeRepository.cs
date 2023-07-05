using authorization.models;

namespace authorization.interfaces
{
    public interface IEmployeeRepository
    {
        Task<Employee> AddEmployee(Employee employee);
        Task<List<Employee>> GetAllEmployees();
    }
}
