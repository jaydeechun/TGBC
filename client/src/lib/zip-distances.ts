// Pre-calculated distances from 20715 (Bowie, MD) to common MD/DC zip codes
// This provides a simple distance lookup without requiring external APIs

export const ZIP_DISTANCES: Record<string, number> = {
  // Bowie area (0-10 miles)
  "20715": 0,
  "20716": 2,
  "20717": 3,
  "20718": 4,
  "20719": 5,
  "20720": 3,
  "20721": 4,
  
  // Nearby areas (10-25 miles)
  "20706": 8,  // Lanham
  "20707": 10, // Laurel
  "20708": 11, // Laurel
  "20709": 12, // Laurel
  "20710": 15, // Bladensburg
  "20712": 18, // Mount Rainier
  "20740": 14, // College Park
  "20741": 14, // College Park
  "20742": 14, // College Park
  "20743": 17, // Capitol Heights
  "20744": 20, // Fort Washington
  "20745": 22, // Oxon Hill
  "20746": 19, // Suitland
  "20747": 18, // District Heights
  "20748": 21, // Temple Hills
  "20770": 15, // Greenbelt
  "20771": 15, // Greenbelt
  "20772": 12, // Upper Marlboro
  "20773": 12, // Upper Marlboro
  "20774": 12, // Upper Marlboro
  "20775": 12, // Upper Marlboro
  "20781": 16, // Hyattsville
  "20782": 16, // Hyattsville
  "20783": 17, // Hyattsville
  "20784": 18, // Hyattsville
  "20785": 19, // Cheverly
  
  // Washington DC (15-30 miles)
  "20001": 25, // DC - Northwest
  "20002": 23, // DC - Northeast
  "20003": 24, // DC - Southeast
  "20004": 26, // DC - Downtown
  "20005": 26, // DC - Downtown
  "20006": 26, // DC - Downtown
  "20007": 28, // DC - Georgetown
  "20008": 29, // DC - Northwest
  "20009": 26, // DC - Northwest
  "20010": 27, // DC - Northwest
  "20011": 24, // DC - Northwest
  "20012": 25, // DC - Northwest
  "20015": 28, // DC - Northwest
  "20016": 30, // DC - Northwest
  "20017": 23, // DC - Northeast
  "20018": 22, // DC - Northeast
  "20019": 21, // DC - Southeast
  "20020": 22, // DC - Southeast
  "20024": 25, // DC - Southwest
  "20032": 20, // DC - Southeast
  
  // Anne Arundel County (20-40 miles)
  "21401": 28, // Annapolis
  "21402": 28, // Annapolis
  "21403": 29, // Annapolis
  "21404": 30, // Annapolis
  "21405": 30, // Annapolis
  "21409": 29, // Annapolis
  "21012": 32, // Arnold
  "21032": 22, // Crownsville
  "21035": 24, // Davidsonville
  "21037": 18, // Edgewater
  "21054": 20, // Gambrills
  "21060": 35, // Glen Burnie
  "21061": 36, // Glen Burnie
  "21062": 38, // Glen Burnie
  "21076": 32, // Hanover
  "21090": 40, // Linthicum
  "21108": 22, // Millersville
  "21113": 25, // Odenton
  "21114": 18, // Crofton
  "21122": 35, // Pasadena
  "21140": 24, // Riva
  "21144": 30, // Severn
  "21146": 32, // Severna Park
  
  // Baltimore area (35-50 miles)
  "21201": 45, // Baltimore City
  "21202": 45, // Baltimore City
  "21203": 46, // Baltimore City
  "21204": 48, // Baltimore County - Towson
  "21205": 44, // Baltimore City
  "21206": 43, // Baltimore City
  "21207": 48, // Baltimore County - Gwynn Oak
  "21208": 49, // Baltimore County - Pikesville
  "21209": 50, // Baltimore County - Mt Washington
  "21210": 47, // Baltimore City - Roland Park
  "21211": 46, // Baltimore City - Hampden
  "21212": 45, // Baltimore City - Govans
  "21213": 44, // Baltimore City
  "21214": 43, // Baltimore City
  "21215": 47, // Baltimore City
  "21216": 46, // Baltimore City
  "21217": 46, // Baltimore City
  "21218": 45, // Baltimore City
  "21220": 48, // Baltimore County - Middle River
  "21221": 49, // Baltimore County - Essex
  "21222": 50, // Baltimore County - Dundalk
  "21224": 44, // Baltimore City - Highlandtown
  "21225": 46, // Baltimore City - Brooklyn
  "21226": 48, // Baltimore City - Curtis Bay
  "21227": 42, // Baltimore County - Halethorpe
  "21228": 43, // Baltimore County - Catonsville
  "21229": 45, // Baltimore City
  "21230": 45, // Baltimore City
  "21231": 44, // Baltimore City - Fells Point
  "21234": 48, // Baltimore County - Parkville
  "21236": 50, // Baltimore County - Nottingham
  "21237": 49, // Baltimore County - Rosedale
  "21239": 46, // Baltimore City - Northwood
  "21244": 40, // Baltimore County - Windsor Mill
  
  // Montgomery County (25-45 miles)
  "20812": 35, // Glen Echo
  "20813": 38, // Bethesda
  "20814": 36, // Bethesda
  "20815": 34, // Chevy Chase
  "20816": 33, // Bethesda
  "20817": 35, // Bethesda
  "20818": 38, // Cabin John
  "20824": 37, // Potomac
  "20827": 40, // Potomac
  "20832": 42, // Olney
  "20833": 45, // Brookeville
  "20837": 48, // Poolesville
  "20838": 50, // Barnesville
  "20841": 52, // Boyds
  "20842": 53, // Dickerson
  "20850": 28, // Rockville
  "20851": 29, // Rockville
  "20852": 30, // Rockville
  "20853": 31, // Rockville
  "20854": 35, // Potomac
  "20855": 38, // Derwood
  "20860": 40, // Sandy Spring
  "20861": 42, // Ashton
  "20862": 44, // Brinklow
  "20866": 30, // Burtonsville
  "20868": 35, // Spencerville
  "20871": 53, // Clarksburg
  "20872": 55, // Damascus
  "20874": 51, // Germantown
  "20876": 49, // Germantown
  "20877": 45, // Gaithersburg
  "20878": 43, // Gaithersburg
  "20879": 44, // Gaithersburg
  "20880": 48, // Washington Grove
  "20882": 47, // Gaithersburg
  "20886": 46, // Montgomery Village
  "20895": 32, // Kensington
  "20896": 38, // Garrett Park
  "20901": 24, // Silver Spring
  "20902": 25, // Silver Spring
  "20903": 26, // Silver Spring
  "20904": 27, // Silver Spring
  "20905": 28, // Silver Spring
  "20906": 29, // Silver Spring
  "20907": 30, // Silver Spring
  "20908": 31, // Silver Spring
  "20910": 26, // Silver Spring
  "20911": 27, // Silver Spring
  "20912": 25, // Takoma Park
  
  // Howard County (30-50 miles)
  "21029": 42, // Clarksville
  "21036": 48, // Dayton
  "21042": 38, // Ellicott City
  "21043": 40, // Ellicott City
  "21044": 35, // Columbia
  "21045": 36, // Columbia
  "21046": 37, // Columbia
  "21048": 45, // Fulton
  "21075": 35, // Elkridge
  "21077": 33, // Hanover
  "21163": 50, // Woodstock
  "21723": 52, // Cooksville
  "21737": 55, // Glenelg
  "21738": 58, // Glenwood
  "21794": 60, // West Friendship
  "21797": 63, // Woodbine
  
  // Calvert County (35-60 miles)
  "20657": 45, // Barstow
  "20678": 52, // Prince Frederick
  "20685": 58, // Saint Leonard
  "20688": 62, // Solomons
  "20714": 48, // North Beach
  "20732": 42, // Chesapeake Beach
  "20736": 38, // Owings
  "20754": 40, // Dunkirk
  "20764": 35, // Huntingtown
  
  // Charles County (40-70 miles)
  "20601": 45, // Waldorf
  "20602": 46, // Waldorf
  "20603": 47, // Waldorf
  "20604": 48, // Waldorf
  "20613": 42, // Brandywine
  "20616": 38, // Bryans Road
  "20617": 40, // Bryantown
  "20621": 52, // Charlotte Hall
  "20622": 48, // Faulkner
  "20632": 58, // Hughesville
  "20634": 55, // Indian Head
  "20637": 62, // La Plata
  "20639": 50, // Marbury
  "20640": 43, // Nanjemoy
  "20645": 65, // Newburg
  "20646": 63, // La Plata
  "20658": 45, // Port Tobacco
  "20662": 48, // Pomfret
  "20675": 40, // Pomfret
  "20677": 55, // Port Tobacco
  "20695": 42, // White Plains
  
  // Frederick County (50-80 miles)
  "21701": 65, // Frederick
  "21702": 66, // Frederick
  "21703": 67, // Frederick
  "21704": 68, // Frederick
  "21705": 65, // Frederick
  "21710": 75, // Adamstown
  "21713": 85, // Boonsboro
  "21716": 78, // Brunswick
  "21718": 82, // Buckeystown
  "21727": 90, // Emmitsburg
  "21754": 72, // Ijamsville
  "21755": 74, // Jefferson
  "21757": 88, // Keymar
  "21758": 80, // Knoxville
  "21769": 70, // Libertytown
  "21770": 73, // Monrovia
  "21771": 68, // Mount Airy
  "21773": 85, // Myersville
  "21774": 76, // New Market
  "21776": 71, // New Windsor
  "21777": 80, // Point of Rocks
  "21778": 92, // Rocky Ridge
  "21780": 95, // Sabillasville
  "21787": 98, // Taneytown
  "21788": 90, // Thurmont
  "21790": 82, // Tuscarora
  "21791": 86, // Union Bridge
  "21792": 78, // Unionville
  "21793": 84, // Walkersville
  "21798": 88, // Woodsboro
};

export function getDistanceFromZip(userZip: string): number | null {
  // Clean the input
  const cleanZip = userZip.trim().substring(0, 5);
  
  // Check if we have this zip code
  if (cleanZip in ZIP_DISTANCES) {
    return ZIP_DISTANCES[cleanZip];
  }
  
  // For unknown zip codes, return null
  return null;
}

export function getServiceAvailability(distance: number | null): {
  status: 'yes' | 'probably' | 'contact';
  message: string;
  color: string;
} {
  if (distance === null) {
    return {
      status: 'contact',
      message: 'Please contact us to check if we serve your area',
      color: 'text-yellow-600'
    };
  }
  
  if (distance <= 25) {
    return {
      status: 'yes',
      message: `Yes! We proudly serve your area (${distance} miles from our base)`,
      color: 'text-green-600'
    };
  } else if (distance <= 50) {
    return {
      status: 'probably',
      message: `We probably serve your area (${distance} miles). Contact us to confirm!`,
      color: 'text-blue-600'
    };
  } else {
    return {
      status: 'contact',
      message: `Your location is ${distance} miles away. Please contact us to discuss service availability.`,
      color: 'text-yellow-600'
    };
  }
}