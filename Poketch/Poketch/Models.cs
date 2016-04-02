using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Poketch
{

    [JsonObject(MemberSerialization.OptIn)]
    class Response<T>
    {
        [JsonProperty(PropertyName = "next")]
        public string Next;
        [JsonProperty(PropertyName = "previous")]
        public string Previous;
        [JsonProperty(PropertyName = "count")]
        public int Count;
        [JsonProperty(PropertyName = "results")]
        public T Results;
    }

    [JsonObject(MemberSerialization.OptIn)]
    public class Pokemon
    {
        [JsonProperty(PropertyName = "id")]
        public string ID;
        [JsonProperty(PropertyName = "name")]
        public string Name;
    }
}
