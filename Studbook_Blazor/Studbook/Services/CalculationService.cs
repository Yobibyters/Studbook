using Studbook.Interfaces;
using Studbook.Models;

namespace Studbook.Services
{
    public class CalculationService : ICalculationService
    {
        public event EventHandler<double>? RatingChanged;

        public double CalculateRating(IEnumerable<Subject> subjects)
        {
            double rating = 0;

            List<Subject> validSubjects = subjects
                .Where(s => 
                    s.Credit is not null && 
                    s.Mark is not null && 
                    s.Mark >= Subject.MarkMin && s.Mark <= Subject.MarkMax && 
                    s.Credit >= Subject.CreditMin && s.Credit <= Subject.CreditMax)
                .ToList();

            double credits = validSubjects.Sum(s => s.Credit) ?? 0;

            if (credits > 0)
            {
                foreach (var subj in validSubjects)
                {
                    if (subj.Credit is double credit && subj.Mark is double mark)
                    {
                        rating += (credit / credits) * mark;
                    }
                }
            }

            rating = rating < 90 ? rating * 0.9 : rating;

            rating = Math.Round(rating, 2);

            RatingChanged?.Invoke(this, rating);

            return rating;
        }
    }
}
