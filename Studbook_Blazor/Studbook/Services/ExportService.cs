using Studbook.Interfaces;

namespace Studbook.Services
{
    public class ExportService : IExportService
    {
        public event EventHandler ExportToClipboard;
        public event EventHandler ExportToPng;
        public event EventHandler ExportToJpeg;
        public event EventHandler ExportToXlsx;

        public void ToClipboard()
        {
            ExportToClipboard?.Invoke(this, EventArgs.Empty);
        }

        public void ToJpeg()
        {
            ExportToJpeg?.Invoke(this, EventArgs.Empty);
        }

        public void ToPng()
        {
            ExportToPng?.Invoke(this, EventArgs.Empty);
        }

        public void ToXlsx()
        {
            ExportToXlsx?.Invoke(this, EventArgs.Empty);
        }
    }
}
