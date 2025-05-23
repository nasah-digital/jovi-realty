
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({ onFilterChange = () => {}, isHomepage = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isBuyPage = location.pathname === "/property-listing/buy";
  const isRentPage = location.pathname === "/property-listing/rent";
  const isNavigationPage = isBuyPage || isRentPage;

  // Initialize filter states from query params
  const queryParams = new URLSearchParams(location.search);
  const initialLocation = queryParams.get("location") || "";
  const initialBedrooms = queryParams.get("bedrooms") || "";
  const initialType = queryParams.get("type") || "";
  const initialPriceRange = queryParams.get("priceRange") || "";

  const [activeTab, setActiveTab] = useState(isHomepage ? "buy" : isRentPage ? "rent" : "buy");
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [selectedBedrooms, setSelectedBedrooms] = useState(initialBedrooms);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedPriceRange, setSelectedPriceRange] = useState(initialPriceRange);

  const propertiesData = [
    { id: "PROP001", status: "For Sale", location: "Downtown", bedrooms: 3, type: "Condo", price: "$750,000" },
    { id: "PROP002", status: "For Sale", location: "West End", bedrooms: 4, type: "Townhouse", price: "$1,200,000" },
    { id: "PROP003", status: "For Sale", location: "Mount Pleasant", bedrooms: 3, type: "Townhouse", price: "$900,000" },
    { id: "PROP004", status: "For Sale", location: "Coal Harbour", bedrooms: 5, type: "House", price: "$1,500,000" },
    { id: "PROP005", status: "For Sale", location: "South Granville", bedrooms: 3, type: "Condo", price: "$850,000" },
    { id: "PROP006", status: "For Sale", location: "Shaughnessy", bedrooms: 4, type: "House", price: "$1,000,000" },
    { id: "PROP007", status: "For Sale", location: "Kerrisdale", bedrooms: 3, type: "Townhouse", price: "$950,000" },
    { id: "PROP008", status: "For Sale", location: "Dunbar", bedrooms: 4, type: "House", price: "$1,300,000" },
    { id: "PROP009", status: "For Sale", location: "Riley Park", bedrooms: 3, type: "Townhouse", price: "$1,100,000" },
    { id: "PROP010", status: "For Sale", location: "Hastings-Sunrise", bedrooms: 2, type: "Apartment", price: "$800,000" },
    { id: "PROP011", status: "For Sale", location: "Arbutus Ridge", bedrooms: 5, type: "House", price: "$1,400,000" },
    { id: "PROP012", status: "For Sale", location: "Victoria-Fraserview", bedrooms: 3, type: "Townhouse", price: "$1,050,000" },
    { id: "PROP013", status: "For Sale", location: "Kitsilano", bedrooms: 4, type: "House", price: "$1,250,000" },
    { id: "PROP014", status: "For Sale", location: "East Vancouver", bedrooms: 2, type: "Apartment", price: "$700,000" },
    { id: "PROP015", status: "For Sale", location: "Point Grey", bedrooms: 5, type: "House", price: "$1,600,000" },
    { id: "PROP016", status: "For Sale", location: "Fairview", bedrooms: 3, type: "Condo", price: "$880,000" },
    { id: "PROP017", status: "For Sale", location: "Yaletown", bedrooms: 3, type: "Condo", price: "$1,150,000" },
    { id: "PROP018", status: "For Sale", location: "Grandview", bedrooms: 3, type: "Townhouse", price: "$950,000" },
    { id: "PROP019", status: "For Rent", location: "Kitsilano", bedrooms: 2, type: "Apartment", price: "$2,500/mo" },
    { id: "PROP020", status: "For Rent", location: "Yaletown", bedrooms: 2, type: "Condo", price: "$3,000/mo" },
    { id: "PROP021", status: "For Rent", location: "False Creek", bedrooms: 1, type: "Apartment", price: "$2,800/mo" },
    { id: "PROP022", status: "For Rent", location: "East Vancouver", bedrooms: 2, type: "Townhouse", price: "$2,200/mo" },
    { id: "PROP023", status: "For Rent", location: "Point Grey", bedrooms: 3, type: "House", price: "$3,500/mo" },
    { id: "PROP024", status: "For Rent", location: "Fairview", bedrooms: 2, type: "Apartment", price: "$2,600/mo" },
    { id: "PROP025", status: "For Rent", location: "Cambie", bedrooms: 2, type: "Condo", price: "$2,900/mo" },
    { id: "PROP026", status: "For Rent", location: "Grandview", bedrooms: 1, type: "Apartment", price: "$2,400/mo" },
    { id: "PROP027", status: "For Rent", location: "Strathcona", bedrooms: 3, type: "Townhouse", price: "$3,200/mo" },
    { id: "PROP028", status: "For Rent", location: "Renfrew-Collingwood", bedrooms: 2, type: "Apartment", price: "$2,700/mo" },
    { id: "PROP029", status: "For Rent", location: "Killarney", bedrooms: 1, type: "Apartment", price: "$2,300/mo" },
    { id: "PROP030", status: "For Rent", location: "Sunset", bedrooms: 2, type: "Condo", price: "$3,100/mo" },
    { id: "PROP031", status: "For Rent", location: "Mount Pleasant", bedrooms: 2, type: "Apartment", price: "$2,600/mo" },
    { id: "PROP032", status: "For Rent", location: "West End", bedrooms: 3, type: "Condo", price: "$3,300/mo" },
    { id: "PROP033", status: "For Rent", location: "Coal Harbour", bedrooms: 1, type: "Apartment", price: "$2,200/mo" },
    { id: "PROP034", status: "For Rent", location: "South Granville", bedrooms: 2, type: "Townhouse", price: "$2,800/mo" },
    { id: "PROP035", status: "For Rent", location: "Shaughnessy", bedrooms: 3, type: "House", price: "$3,000/mo" },
    { id: "PROP036", status: "For Rent", location: "Kerrisdale", bedrooms: 2, type: "Apartment", price: "$2,500/mo" },
  ];

  console.log("SearchBar propertiesData:", propertiesData);
  console.log("SearchBar Active Tab:", activeTab, "IsRentPage:", isRentPage, "IsHomepage:", isHomepage);

  const getFilterOptions = (status) => {
    if (!propertiesData || !Array.isArray(propertiesData)) {
      console.warn("propertiesData is undefined or not an array");
      return { locations: [], bedrooms: [], types: [], priceRanges: [] };
    }

    const filteredProperties = propertiesData.filter(
      (property) => property.status === status
    );

    if (filteredProperties.length === 0) {
      return { locations: [], bedrooms: [], types: [], priceRanges: [] };
    }

    const locations = [...new Set(filteredProperties.map((p) => p.location))].sort();
    const bedrooms = [...new Set(filteredProperties.map((p) => p.bedrooms))].sort((a, b) => a - b);
    const types = [...new Set(filteredProperties.map((p) => p.type))].filter(Boolean).sort();

    const prices = filteredProperties
      .map((p) => {
        const priceNum = parseFloat(p.price.replace("$", "").replace(",", "").replace("/mo", ""));
        return priceNum;
      })
      .filter((num) => !isNaN(num));

    if (prices.length === 0) {
      return { locations, bedrooms, types, priceRanges: [] };
    }

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRanges =
      status === "For Sale"
        ? generateSalePriceRanges(minPrice, maxPrice)
        : generateRentPriceRanges(minPrice, maxPrice);

    return { locations, bedrooms, types, priceRanges };
  };

  const generateSalePriceRanges = (min, max) => {
    const ranges = [];
    const step = 250000;
    let start = Math.floor(min / step) * step;
    while (start < max) {
      const end = start + step;
      ranges.push({
        label: `$${start.toLocaleString()} - $${end.toLocaleString()}`,
        min: start,
        max: end,
      });
      start = end;
    }
    ranges.push({
      label: `$${start.toLocaleString()}+`,
      min: start,
      max: Infinity,
    });
    return ranges;
  };

  const generateRentPriceRanges = (min, max) => {
    const ranges = [];
    const step = 500;
    let start = Math.floor(min / step) * step;
    while (start < max) {
      const end = start + step;
      ranges.push({
        label: `$${start.toLocaleString()}/mo - $${end.toLocaleString()}/mo`,
        min: start,
        max: end,
      });
      start = end;
    }
    ranges.push({
      label: `$${start.toLocaleString()}/mo+`,
      min: start,
      max: Infinity,
    });
    return ranges;
  };

  const filterProperties = () => {
    const status = activeTab === "buy" ? "For Sale" : "For Rent";
    let filtered = propertiesData.filter((p) => p.status === status);

    if (selectedLocation) {
      filtered = filtered.filter((p) => p.location === selectedLocation);
    }
    if (selectedBedrooms) {
      filtered = filtered.filter((p) => p.bedrooms === Number(selectedBedrooms));
    }
    if (selectedType) {
      filtered = filtered.filter((p) => p.type === selectedType);
    }
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split("-").map((v) => {
        const num = parseFloat(v.replace("$", "").replace(",", "").replace("/mo", ""));
        return isNaN(num) ? Infinity : num;
      });
      filtered = filtered.filter((p) => {
        const priceNum = parseFloat(p.price.replace("$", "").replace(",", "").replace("/mo", ""));
        return priceNum >= min && (max === Infinity || priceNum <= max);
      });
    }

    console.log("SearchBar Filtered Properties:", filtered);
    return { filtered, status };
  };

  const handleSearch = () => {
    const { filtered, status } = filterProperties();
    if (isHomepage) {
      const queryParams = new URLSearchParams({
        ...(selectedLocation && { location: selectedLocation }),
        ...(selectedBedrooms && { bedrooms: selectedBedrooms }),
        ...(selectedType && { type: selectedType }),
        ...(selectedPriceRange && { priceRange: selectedPriceRange }),
      }).toString();
      const path = activeTab === "buy" ? `/property-listing/buy?${queryParams}` : `/property-listing/rent?${queryParams}`;
      navigate(path);
    } else {
      onFilterChange(filtered, status);
    }
  };

  const handleTabClick = (tab, path) => {
    setActiveTab(tab);
    if (!isHomepage && isNavigationPage) {
      navigate(path);
      const tabElement = document.querySelector(`[data-bs-target="#${tab}-tab"]`);
      if (tabElement) {
        const bsTab = new window.bootstrap.Tab(tabElement);
        bsTab.show();
      }
    }
    setSelectedLocation("");
    setSelectedBedrooms("");
    setSelectedType("");
    setSelectedPriceRange("");
    if (!isHomepage) {
      const { filtered, status } = filterProperties();
      onFilterChange(filtered, status);
    }
  };

  // Sync activeTab with route on mount for non-homepage
  useEffect(() => {
    if (!isHomepage) {
      if (isRentPage && activeTab !== "rent") {
        setActiveTab("rent");
      } else if (isBuyPage && activeTab !== "buy") {
        setActiveTab("buy");
      }
      // Apply filters from query params on page load
      const { filtered, status } = filterProperties();
      onFilterChange(filtered, status);
    }
  }, [isRentPage, isBuyPage, isHomepage]);

  const { locations, bedrooms, types, priceRanges } = getFilterOptions(
    activeTab === "buy" ? "For Sale" : "For Rent"
  );

  const buyTabActive = isHomepage ? activeTab === "buy" : isNavigationPage ? isBuyPage : activeTab === "buy";
  const rentTabActive = isHomepage ? activeTab === "rent" : isNavigationPage ? isRentPage : activeTab === "rent";

  return (
    <div className="search-bar-cont w-100">
      <div className="container">
        <div className="search-tabs-wrapper">
          <div className="nav nav-tabs search-tabs" role="tablist">
            <button
              type="button"
              className={`tab-btn ${buyTabActive ? "active" : ""}`}
              onClick={() => handleTabClick("buy", "/property-listing/buy")}
              data-bs-toggle="tab"
              data-bs-target="#buy-tab"
              role="tab"
              aria-selected={buyTabActive}
            >
              Buy
            </button>
            <button
              type="button"
              className={`tab-btn ${rentTabActive ? "active" : ""}`}
              onClick={() => handleTabClick("rent", "/property-listing/rent")}
              data-bs-toggle="tab"
              data-bs-target="#rent-tab"
              role="tab"
              aria-selected={rentTabActive}
            >
              Rent
            </button>
          </div>
        </div>

        <div className="tab-content">
          <div className={`tab-pane fade ${buyTabActive ? "show active" : ""}`} id="buy-tab" role="tabpanel">
            <div className="search-bar-row d-grid justify-content-center justify-content-md-start align-items-center">
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Location</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedLocation || "Select Location"}
                  </button>
                  <ul className="dropdown-menu">
                    {locations.map((loc) => (
                      <li key={loc}>
                        <button className="dropdown-item" onClick={() => setSelectedLocation(loc)}>
                          {loc}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Bedrooms</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedBedrooms || "Select Bedrooms"}
                  </button>
                  <ul className="dropdown-menu">
                    {bedrooms.map((bed) => (
                      <li key={bed}>
                        <button className="dropdown-item" onClick={() => setSelectedBedrooms(bed)}>
                          {bed} Bedroom{bed > 1 ? "s" : ""}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Types</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedType || "Select Types"}
                  </button>
                  <ul className="dropdown-menu">
                    {types.map((type) => (
                      <li key={type}>
                        <button className="dropdown-item" onClick={() => setSelectedType(type)}>
                          {type}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter mb-md-0">
                <label className="form-label">Price Range</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedPriceRange || "Min. price – Max. price"}
                  </button>
                  <ul className="dropdown-menu">
                    {priceRanges.map((range) => (
                      <li key={range.label}>
                        <button
                          className="dropdown-item"
                          onClick={() => setSelectedPriceRange(`${range.min}-${range.max}`)}
                        >
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-btn">
                <button className="btn btn-primary" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className={`tab-pane fade ${rentTabActive ? "show active" : ""}`} id="rent-tab" role="tabpanel">
            <div className="search-bar-row d-grid justify-content-center justify-content-md-start align-items-center">
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Location</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedLocation || "Select Location"}
                  </button>
                  <ul className="dropdown-menu">
                    {locations.map((loc) => (
                      <li key={loc}>
                        <button className="dropdown-item" onClick={() => setSelectedLocation(loc)}>
                          {loc}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Bedrooms</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedBedrooms || "Select Bedrooms"}
                  </button>
                  <ul className="dropdown-menu">
                    {bedrooms.map((bed) => (
                      <li key={bed}>
                        <button className="dropdown-item" onClick={() => setSelectedBedrooms(bed)}>
                          {bed} Bedroom{bed > 1 ? "s" : ""}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter border-end mb-md-0">
                <label className="form-label">Types</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedType || "Select Types"}
                  </button>
                  <ul className="dropdown-menu">
                    {types.map((type) => (
                      <li key={type}>
                        <button className="dropdown-item" onClick={() => setSelectedType(type)}>
                          {type}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-filter mb-md-0">
                <label className="form-label">Price Range</label>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                    {selectedPriceRange || "Min. price – Max. price"}
                  </button>
                  <ul className="dropdown-menu">
                    {priceRanges.map((range) => (
                      <li key={range.label}>
                        <button
                          className="dropdown-item"
                          onClick={() => setSelectedPriceRange(`${range.min}-${range.max}`)}
                        >
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="search-btn">
                <button className="btn btn-primary" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;