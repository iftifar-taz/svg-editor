using Microsoft.Extensions.Logging;
using SvgEditor.API.Helpers;
using SvgEditor.API.Models;
using SvgEditor.API.Services.Contracts;
using System.Threading.Tasks;

namespace SvgEditor.API.Services
{
    public sealed class SvgDataService : ISvgDataService
    {
        private readonly string _fileName = Constants.SVG_FILE_NAME;
        private readonly ILogger<SvgDataService> _logger;

        public SvgDataService(ILogger<SvgDataService> logger)
        {
            _logger = logger;
        }

        public async Task<SvgDimention> GetSvgDimention()
        {
            _logger.LogInformation("Start reading from file {0}", _fileName);
            var data = await JsonReadWriteHelper<SvgDimention>.Read(_fileName);
            _logger.LogInformation("End reading from file {0}", _fileName);
            return data;
        }

        public async Task SaveSvgDimention(SvgDimention svgDimention)
        {
            _logger.LogInformation("Start writting to file {0}", _fileName);
            await JsonReadWriteHelper<SvgDimention>.Write(_fileName, svgDimention);
            _logger.LogInformation("End writting to file {0}", _fileName);
        }
    }
}
