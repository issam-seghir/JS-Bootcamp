let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;


//* - `/` and `/`: These forward slashes mark the beginning and end of the regular expression.
//* - `https?`: Matches "http" or "https". The question mark "?" makes the "s" character optional.
//* - `:\/\/`: Matches the literal characters "://".
//* - `(?:[-\w]+\.)?`: This is a non-capturing group `(?: ... )?`. It matches an optional subdomain consisting of one or more word characters or hyphens, followed by a dot.
//* - `([-\w]+)`: This is a capturing group `(...)` that matches the domain name, which consists of one or more word characters or hyphens.
//* - `\.\w+`: Matches a dot followed by one or more word characters (letters, digits, or underscores), representing the top-level domain (TLD) like ".com", ".org", etc.
//* - `(?:\.\w+)?`: This is another optional non-capturing group `(?: ... )?` that matches an optional subdomain, similar to the previous one.
//* - `\/?`: Matches an optional forward slash character.
//* - `.*`: Matches any remaining characters (zero or more), representing the path or query parameters of the URL.
//* - `i`: This is a flag indicating case-insensitive matching.

//? this regular expression is  used to match and extract URLs from text.
//? It captures the domain name and ignores the protocol, subdomains, and specific URL paths or query parameters.
