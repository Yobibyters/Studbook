namespace Studbook.Models
{
    public class Subject
    {
        public static readonly double CreditMax = 10.0;
        public static readonly double CreditMin = 0.0;
        public static readonly double MarkMax = 100.0;
        public static readonly double MarkMin = 0.0;

        public string? Name { get; set; }
        public double? Credit { get; set; }
        public double? Mark { get; set; }
    }
}
