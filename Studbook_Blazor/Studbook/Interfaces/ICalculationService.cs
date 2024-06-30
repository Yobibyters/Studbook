using Studbook.Models;

namespace Studbook.Interfaces
{
    public interface ICalculationService
    {
        public event EventHandler<double> RatingChanged;
        public double CalculateRating(IEnumerable<Subject> subjects);
    }
}
