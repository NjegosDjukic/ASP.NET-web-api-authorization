using authorization.models;
using Microsoft.EntityFrameworkCore;

namespace authorization.data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Employee> Employee { get; set; }

    }
}
