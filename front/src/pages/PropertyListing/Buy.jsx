import React, { useState } from "react";
import Header from "../../components/shared/Sections/Header/header";
import Footer from "../../components/shared/Sections/Footer/footer";
import Banner from "../../components/shared/Sections/Banner/Banner";
import EmptySection from "../../components/shared/Sections/EmptySection/EmptySection";
import SearchBar from "../../components/shared/Elements/SearchBar/SearchBar";
import PropertyGrid from "../../components/shared/Sections/PropertyGrid/PropertyGrid";
import CTASection from "../../components/shared/Sections/CTASection/CTASection";
import propertyBannerImg from "./../../assets/Images/property-banner.png";
import PropertiesData from "../../components/Data/PropertiesData";
import { useLocation } from "react-router-dom";

const Buy = () => {
  const location = useLocation();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const status = "For Sale";

  const handleFilterChange = (filtered, filterStatus) => {
    console.log("Buy Filtered Input:", filtered);
    const enrichedProperties = filtered.map((filteredProp) => {
      const fullProp = PropertiesData.find(
        (p) =>
          p.id === filteredProp.id &&
          p.status === filterStatus &&
          p.location === filteredProp.location &&
          p.bedrooms === filteredProp.bedrooms &&
          p.type === filteredProp.type &&
          p.price === filteredProp.price
      );
      return fullProp || filteredProp;
    });
    console.log("Buy Enriched Properties:", enrichedProperties);
    setFilteredProperties(enrichedProperties);
  };
  return (
    <div className="property-listing property-listing-buy">
      <Header />
      <Banner backgroundImage={propertyBannerImg} title="Property Listing" />
      <EmptySection className="search-bar-dark">
        <SearchBar onFilterChange={handleFilterChange} />
      </EmptySection>
      <PropertyGrid
        title="Luxury Homes for Sale"
        properties={filteredProperties}
        status={status}
      />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Buy;