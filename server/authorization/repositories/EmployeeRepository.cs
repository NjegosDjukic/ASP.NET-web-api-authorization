using authorization.interfaces;
using authorization.models;
using Microsoft.EntityFrameworkCore;

namespace authorization.repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DataContext _dataContext;
        public EmployeeRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<Employee> AddEmployee(Employee newEmployee)
        {
            if (newEmployee == null)
            {
                throw new ArgumentNullException(nameof(newEmployee));
            }

            await _dataContext.Employee.AddAsync(newEmployee);
            await _dataContext.SaveChangesAsync();

            return newEmployee;
        }
        public async Task<List<Employee>> GetAllEmployees()
        {
            return await _dataContext.Employee.ToListAsync();
        }

    }
}
