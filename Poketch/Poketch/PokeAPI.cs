using Newtonsoft.Json;
using System;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Poketch
{
    
    public interface IClient
    {
        Task<HttpResponseMessage> Get(string url);
    }

    public class HttpClientWrapper : IClient
    {

        private HttpClient client;
        public HttpClientWrapper(HttpClient client)
        {
            this.client = client;
        }

        public Task<HttpResponseMessage> Get(string url)
        {
            var req = new HttpRequestMessage(HttpMethod.Get, url);
            return client.SendAsync(req);
        }

    }

    public class PokeAPI
    {
        private const string URL_BASE = "https://pokeapi.co/api/v2";

        private IClient client;

        public PokeAPI(IClient client)
        {
            this.client = client;
        }

        public async Task<Pokemon[]> GetPokemonList(int offset = 0)
        {
            var res = await client.Get($"{URL_BASE}/pokemon?limit=20&offset={offset}");
            var body = await DeserializeBody<Response<Pokemon[]>>(res);
            return body.Results;
        }

        private async Task<T> DeserializeBody<T>(HttpResponseMessage res)
        {
            using (var stream = new MemoryStream())
            {
                var str = await res.Content.ReadAsStringAsync();
                T obj = JsonConvert.DeserializeObject<T>(str);
                return obj;
            }
        }
    }
}

