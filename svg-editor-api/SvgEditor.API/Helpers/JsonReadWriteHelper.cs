using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Threading.Tasks;

namespace SvgEditor.API.Helpers
{
    public static class JsonReadWriteHelper<T> where T : class
    {
        public static async Task<T> Read(string path)
        {
            var json = await System.IO.File.ReadAllTextAsync(path);
            return JsonConvert.DeserializeObject<T>(json);
        }

        public static async Task Write(string path, T data)
        {
            var jsonSerializerSettings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            var json = JsonConvert.SerializeObject(data, jsonSerializerSettings);
            await System.IO.File.WriteAllTextAsync(path, json);
        }
    }
}
