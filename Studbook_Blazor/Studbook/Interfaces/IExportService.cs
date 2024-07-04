namespace Studbook.Interfaces
{
    public interface IExportService
    {
        public event EventHandler ExportToClipboard;
        public event EventHandler ExportToPng;
        public event EventHandler ExportToJpeg;
        public event EventHandler ExportToXlsx;

        public void ToClipboard();
        public void ToPng();
        public void ToJpeg();
        public void ToXlsx();
    }
}
