using SvgEditor.API.Models;
using System.Threading.Tasks;

namespace SvgEditor.API.Services.Contracts
{
    public interface ISvgDataService
    {
        Task<SvgDimention> GetSvgDimention();
        Task SaveSvgDimention(SvgDimention svgDimention);
    }
}
