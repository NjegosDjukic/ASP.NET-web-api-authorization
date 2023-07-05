using authorization.interfaces;
using authorization.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace authorization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeService _employeeService;
        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Employee>> AddEmployee(Employee employee)
        {
            var employeeSaved = await _employeeService.AddEmployee(employee);
            return Ok(employeeSaved);
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetEmployees()
        {
            var employees = await _employeeService.GetAllEmployees();
            if (employees == null)
            {
                return NotFound("Employees not found");
            }
            return Ok(employees); ;
        }
    }
}
