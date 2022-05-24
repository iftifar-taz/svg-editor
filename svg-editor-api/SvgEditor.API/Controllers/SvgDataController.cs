using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SvgEditor.API.Infrastructure.Attributes;
using SvgEditor.API.Models;
using SvgEditor.API.Services.Contracts;
using System;
using System.Threading.Tasks;

namespace SvgEditor.API.Controllers
{
    [ApiController]
    [ControllerRoute("svg-data")]
    public sealed class SvgDataController : ControllerBase
    {
        private readonly ILogger<SvgDataController> _logger;
        private readonly ISvgDataService _svgDataService;

        public SvgDataController(
            ILogger<SvgDataController> logger,
            ISvgDataService svgDataService)
        {
            _logger = logger;
            _svgDataService = svgDataService;
        }

        [HttpGet]
        public async Task<ActionResult<SvgDimention>> Get()
        {
            try
            {
                var response = await _svgDataService.GetSvgDimention();
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] SvgDimention svgDimention)
        {
            try
            {
                await _svgDataService.SaveSvgDimention(svgDimention);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpPatch]
        public async Task<IActionResult> Patch([FromBody] SvgDimention svgDimention)
        {
            try
            {
                await _svgDataService.SaveSvgDimention(svgDimention);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }
    }
}
