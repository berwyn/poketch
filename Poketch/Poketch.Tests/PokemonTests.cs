using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Net.Http;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Poketch.Tests
{
    [TestClass]
    public class PokemonTests
    {

        #region DATA
        private const string LIST_JSON = @"
        {
            ""count"":811,
            ""next"":""http://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"",
            ""previous"":null,
            ""results"":[
                {
                    ""name"":""bulbasaur"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/1/""
                },
                {
                    ""name"":""ivysaur"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/2/""
                },
                {
                    ""name"":""venusaur"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/3/""
                },
                {
                    ""name"":""charmander"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/4/""
                },
                {
                    ""name"":""charmeleon"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/5/""
                },
                {
                    ""name"":""charizard"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/6/""
                },
                {
                    ""name"":""squirtle"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/7/""
                },
                {
                    ""name"":""wartortle"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/8/""
                },
                {
                    ""name"":""blastoise"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/9/""
                },
                {
                    ""name"":""caterpie"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/10/""
                },
                {
                    ""name"":""metapod"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/11/""
                },
                {
                    ""name"":""butterfree"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/12/""
                },
                {
                    ""name"":""weedle"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/13/""
                },
                {
                    ""name"":""kakuna"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/14/""
                },
                {
                    ""name"":""beedrill"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/15/""
                },
                {
                    ""name"":""pidgey"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/16/""
                },
                {
                    ""name"":""pidgeotto"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/17/""
                },
                {
                    ""name"":""pidgeot"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/18/""
                },
                {
                    ""name"":""rattata"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/19/""
                },
                {
                    ""name"":""raticate"",
                    ""url"":""http://pokeapi.co/api/v2/pokemon/20/""
                }
            ]
        }
        ";
        #endregion

        class MockClient : IClient
        {
            private Task<HttpResponseMessage> task;

            public MockClient(string json)
            {
                this.task = BuildTaskWithJson(json);
            }

            public Task<HttpResponseMessage> Get(string url)
            {
                return this.task;
            }

            private Task<HttpResponseMessage> BuildTaskWithJson(string json)
            {
                var responseMessage = new HttpResponseMessage();
                responseMessage.Content = new StringContent(json);
                return Task.Run(() => responseMessage);
            }
        }

        [TestMethod]
        public async Task TestList()
        {
            var client = new MockClient(LIST_JSON);
            var api = new PokeAPI(client);
            var list = await api.GetPokemonList();

            Assert.AreEqual(20, list.Length, "List should contain 20 pokemon");
            Assert.AreEqual("bulbasaur", list[0].Name);
            Assert.AreEqual("charmander", list[3].Name);
            Assert.AreEqual("squirtle", list[6].Name);
        }
    }
}
