using Microsoft.AspNetCore.Mvc.Routing;
using System;

namespace SvgEditor.API.Infrastructure.Attributes
{
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = true)]
    public sealed class ControllerRouteAttribute : Attribute, IRouteTemplateProvider
    {
        public ControllerRouteAttribute(string route)
        {
            Route = route;
            Template = $"api/{route}";
        }

        public string Route { get; }

        public string Template { get; }

        public int? Order { get; set; }

        public string Name { get; set; }
    }
}
