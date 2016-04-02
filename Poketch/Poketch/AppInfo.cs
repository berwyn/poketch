using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Poketch
{
    class AppInfo
    {

        public const short VERSION_MAJOR = 0;
        public const short VERSION_MINOR = 1;
        public const short VERSION_PATCH = 0;

        public static string GetVersion() => $"{VERSION_MAJOR}.{VERSION_MINOR}.{VERSION_PATCH}";
    }
}
