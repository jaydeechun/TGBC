import { db } from "./db";
import { portfolioItems } from "@shared/schema";

async function seedPortfolioItems() {
  console.log("Seeding portfolio items...");

  const portfolioData = [
    {
      title: "Luxury Kitchen with Granite Island",
      location: "Maryland",
      category: "kitchen",
      image: "/attached_assets/Karim Substantial Completion Pix-7_enhanced_1749367023240.jpg",
      description: "Stunning kitchen remodel featuring white cabinetry, dramatic granite waterfall island, custom lighting, and expansive windows overlooking outdoor space.",
      details: {
        cabinets: {
          style: "White Shaker",
          material: "Solid Wood",
          finish: "White Paint"
        },
        countertops: {
          material: "Granite",
          color: "Viscont White",
          edge: "Eased Edge",
          features: "Waterfall Island"
        },
        flooring: {
          type: "Luxury Vinyl Plank",
          color: "Dark Gray",
          size: "12x24 Plank"
        },
        appliances: {
          refrigerator: "Stainless Steel French Door",
          range: "Gas Range with Hood",
          dishwasher: "Stainless Steel Built-in",
          microwave: "Over-range Microwave"
        },
        lighting: {
          pendants: "Modern Geometric Pendants",
          recessed: "LED Can Lights",
          under_cabinet: "LED Strip Lighting"
        },
        budget: "$75,000 - $85,000",
        timeline: "8-10 weeks",
        special_features: [
          "Granite waterfall island",
          "Custom breakfast nook seating",
          "Expansive windows with custom trim",
          "Open concept design",
          "Professional-grade appliances"
        ]
      }
    },
    {
      title: "Luxury Master Bathroom",
      location: "Washington, DC",
      category: "bathroom",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlZmY2ZmYiIHN0cm9rZT0iIzA4OWVjYiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjEwMCIgeT0iODAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAiIGZpbGw9IiMwODllY2IiLz4KPHJlY3QgeD0iMTAwIiB5PSIxMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0iI2RkZDZmZSIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iMjIwIiB5PSIxMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0iI2ZlZjNjNyIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iMTAwIiB5PSIyMTAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAiIGZpbGw9IiMwODllY2IiLz4KPHN2Zz4=",
      description: "Spa-like retreat with custom hexagonal tile, walk-in shower, freestanding tub, and brass fixtures.",
      details: {
        vanity: {
          style: "Floating Double Vanity",
          material: "White Oak",
          finish: "Natural Stain"
        },
        countertops: {
          material: "Quartz",
          color: "Calacatta Gold",
          edge: "Polished Edge"
        },
        flooring: {
          type: "Hexagonal Porcelain",
          color: "Carrara Marble Look",
          size: "2 inch hex"
        },
        fixtures: {
          tub: "Freestanding Soaking Tub",
          shower: "Frameless Glass Walk-in",
          toilet: "Wall-mounted",
          faucets: "Brushed Brass"
        },
        tile: {
          shower_walls: "Large Format Subway",
          accent: "Natural Stone Mosaic",
          layout: "Herringbone Pattern"
        },
        budget: "$45,000 - $55,000",
        timeline: "6-8 weeks",
        special_features: [
          "Heated floors",
          "Custom tile work",
          "Brass fixture package",
          "Walk-in shower with bench",
          "Freestanding tub placement"
        ]
      }
    },
    {
      title: "Home Addition & Deck",
      location: "Delaware",
      category: "addition",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik01MCAyNTBIMzUwVjEwMEgzMDBMMzAwIDUwSDEwMFYxMDBINTBWMjUwWiIgZmlsbD0iIzgzNGQ5YiIvPgo8cmVjdCB4PSI4MCIgeT0iODAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzVkYzE2OSIvPgo8cmVjdCB4PSIxNDAiIHk9IjgwIiB3aWR0aD0iNDAiIGhlaWdodD0iNjAiIGZpbGw9IiM1ZGMxNjkiLz4KPHJlY3QgeD0iMjIwIiB5PSI4MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNWRjMTY5Ii8+CjxyZWN0IHg9IjI4MCIgeT0iODAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzVkYzE2OSIvPgo8cmVjdCB4PSI4MCIgeT0iMTgwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjYTc4YmZhIi8+CjxyZWN0IHg9IjEyMCIgeT0iMjMwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjU5ZTBiIi8+Cjwvc3ZnPg==",
      description: "Beautiful home addition with matching siding, new windows, custom deck with railings and lattice skirting.",
      details: {
        structure: {
          foundation: "Concrete Footings",
          framing: "2x6 Construction",
          siding: "Matching Vinyl Siding"
        },
        windows: {
          style: "Double-Hung",
          material: "Vinyl",
          glazing: "Low-E Double Pane"
        },
        deck: {
          material: "Pressure Treated Pine",
          railings: "Composite Railings",
          features: "Lattice Skirting"
        },
        budget: "$35,000 - $45,000",
        timeline: "6-8 weeks",
        special_features: [
          "Seamless integration with existing structure",
          "Matching architectural details",
          "Custom deck design",
          "Professional permit handling"
        ]
      }
    },
    {
      title: "Modern Office Buildout",
      location: "Prince George's County, MD",
      category: "commercial",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxyZWN0IHg9IjIwIiB5PSI0MCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyMjAiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzM3NDE1MSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjQwIiB5PSI2MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2VmZjZmZiIgc3Ryb2tlPSIjMTQ1MzY2Ii8+CjxyZWN0IHg9IjE2MCIgeT0iNjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiIGZpbGw9IiNlZmY2ZmYiIHN0cm9rZT0iIzE0NTM2NiIvPgo8cmVjdCB4PSIyODAiIHk9IjYwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZWZmNmZmIiBzdHJva2U9IiMxNDUzNjYiLz4KPHJlY3QgeD0iNDAiIHk9IjE0MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzM3NDE1MSIvPgo8cmVjdCB4PSI0MCIgeT0iMjAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjU5ZTBiIi8+CjxyZWN0IHg9IjE2MCIgeT0iMjAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjU5ZTBiIi8+CjxyZWN0IHg9IjI4MCIgeT0iMjAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjU5ZTBiIi8+Cjwvc3ZnPg==",
      description: "Professional office space with glass partitions, modern finishes, and open concept design.",
      details: {
        finishes: {
          flooring: "Luxury Vinyl Plank",
          walls: "Modern Paint Colors",
          ceiling: "Drop Ceiling with LED"
        },
        partitions: {
          type: "Glass Office Partitions",
          style: "Floor to Ceiling",
          hardware: "Brushed Aluminum"
        },
        lighting: {
          type: "LED Panel Lighting",
          controls: "Smart Dimming",
          emergency: "Battery Backup"
        },
        budget: "$25,000 - $35,000",
        timeline: "4-6 weeks",
        special_features: [
          "Open concept layout",
          "Professional lighting design",
          "Sound dampening materials",
          "Code compliant construction"
        ]
      }
    },
    {
      title: "Modern Navy Kitchen with Under-Cabinet Lighting",
      location: "Baltimore County, MD",
      category: "kitchen",
      image: "/attached_assets/IMG_20240725_071108_enhanced_1749367441308.jpg",
      description: "Sophisticated modern kitchen featuring dark navy cabinetry, quartz countertops, farmhouse sink, and dramatic under-cabinet LED lighting throughout.",
      details: {
        cabinets: {
          style: "Navy Blue Shaker",
          material: "Solid Wood",
          finish: "Navy Blue Paint"
        },
        countertops: {
          material: "Quartz",
          color: "Calacatta Classic",
          edge: "Straight Edge",
          features: "Full slab backsplash"
        },
        flooring: {
          type: "Large Format Tile",
          color: "Light Gray",
          size: "24x24"
        },
        appliances: {
          refrigerator: "Stainless Steel Side-by-Side",
          range: "Stainless Steel Gas Range",
          dishwasher: "Stainless Steel Panel-Ready",
          microwave: "Built-in Microwave Oven"
        },
        lighting: {
          pendants: "Industrial Brass Sconces",
          recessed: "LED Can Lights",
          under_cabinet: "Continuous LED Strip Lighting"
        },
        budget: "$85,000 - $95,000",
        timeline: "10-12 weeks",
        special_features: [
          "Continuous under-cabinet LED lighting",
          "Farmhouse apron-front sink",
          "Full-height quartz backsplash",
          "Industrial brass wall sconces",
          "Professional-grade appliance package",
          "Custom toe-kick lighting"
        ]
      }
    },
    {
      title: "Custom Kitchen Island",
      location: "Anne Arundel County, MD",
      category: "kitchen",
      image: "/attached_assets/TGB Kitchen 1_1749359176367.png",
      description: "Stunning kitchen featuring two-tone cabinetry with natural wood island and white perimeter cabinets.",
      details: {
        cabinets: {
          style: "Two-Tone Shaker",
          material: "Solid Wood",
          finish: "White Paint & Natural Wood"
        },
        countertops: {
          material: "Granite",
          color: "Absolute Black",
          edge: "Eased Edge",
          features: "Island with overhang"
        },
        flooring: {
          type: "Hardwood",
          color: "Natural Oak",
          size: "3.25 inch plank"
        },
        appliances: {
          refrigerator: "Stainless Steel French Door",
          range: "Gas Range with Hood",
          dishwasher: "Stainless Steel Built-in",
          microwave: "Over-range Microwave"
        },
        lighting: {
          pendants: "Industrial Black Pendants",
          recessed: "LED Can Lights",
          under_cabinet: "LED Strip Lighting"
        },
        budget: "$65,000 - $75,000",
        timeline: "8-10 weeks",
        special_features: [
          "Two-tone cabinet design",
          "Natural wood island",
          "Black granite countertops",
          "Custom island with seating",
          "Professional appliance package"
        ]
      }
    },
    {
      title: "Designer Bathroom Suite",
      location: "Montgomery County, MD",
      category: "bathroom",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlZmY2ZmYiIHN0cm9rZT0iIzA4OWVjYiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjEwMCIgeT0iODAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAiIGZpbGw9IiMwODllY2IiLz4KPHJlY3QgeD0iMTAwIiB5PSIxMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0iI2RkZDZmZSIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iMjIwIiB5PSIxMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0iI2ZlZjNjNyIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iMTAwIiB5PSIyMTAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAiIGZpbGw9IiMwODllY2IiLz4KPHN2Zz4=",
      description: "Sophisticated bathroom design with geometric tile patterns, luxury fixtures, and seamless glass shower.",
      details: {
        vanity: {
          style: "Custom Built-in Vanity",
          material: "Walnut Wood",
          finish: "Natural Oil"
        },
        countertops: {
          material: "Marble",
          color: "Carrara White",
          edge: "Polished Edge"
        },
        flooring: {
          type: "Geometric Porcelain",
          color: "Black and White",
          size: "Custom Pattern"
        },
        fixtures: {
          tub: "Freestanding Modern Tub",
          shower: "Seamless Glass Enclosure",
          toilet: "Wall-mounted European",
          faucets: "Matte Black Fixtures"
        },
        tile: {
          shower_walls: "Geometric Pattern Tile",
          accent: "Natural Stone Strip",
          layout: "Custom Design"
        },
        budget: "$55,000 - $65,000",
        timeline: "8-10 weeks",
        special_features: [
          "Custom geometric tile work",
          "Seamless glass shower",
          "Luxury fixture package",
          "Custom vanity design",
          "Heated floor system"
        ]
      }
    },
    // IKEA Kitchen Portfolio Items
    {
      title: "Modern White IKEA Kitchen",
      location: "Bethesda, MD",
      category: "ikea",
      image: "/attached_assets/TGB Kitchen 1_1749359176367.png",
      description: "Complete IKEA SEKTION kitchen with quartz countertops, subway tile backsplash, and professional lighting design.",
      details: {
        size: "200 sq ft",
        duration: "2 weeks",
        cabinetLine: "SEKTION",
        features: ["Quartz Countertops", "Subway Tile", "LED Lighting", "Soft-Close Drawers"]
      },
      createdAt: new Date()
    },
    {
      title: "IKEA Kitchen with Gold Accents",
      location: "Washington, DC",
      category: "ikea",
      image: "/attached_assets/TGB Kitchen 2_1749362842717.png",
      description: "Elegant IKEA kitchen featuring gold hardware, geometric tile flooring, and farmhouse sink installation.",
      details: {
        size: "180 sq ft",
        duration: "2.5 weeks",
        cabinetLine: "SEKTION",
        features: ["Gold Hardware", "Farmhouse Sink", "Geometric Tiles", "Custom Island"]
      },
      createdAt: new Date()
    },
    {
      title: "Contemporary IKEA Design",
      location: "Rockville, MD",
      category: "ikea",
      image: "/attached_assets/image_1749359709392.png",
      description: "Sleek IKEA kitchen installation with custom modifications and premium finishes throughout.",
      details: {
        size: "250 sq ft",
        duration: "3 weeks",
        cabinetLine: "SEKTION",
        features: ["Custom Modifications", "Premium Finishes", "Open Shelving", "Integrated Appliances"]
      },
      createdAt: new Date()
    },
    {
      title: "Complete Kitchen Remodel",
      location: "Silver Spring, MD",
      category: "ikea",
      image: "/attached_assets/image_1749359777085.png",
      description: "Full IKEA kitchen transformation including mechanical, electrical, and plumbing upgrades.",
      details: {
        size: "220 sq ft",
        duration: "4 weeks",
        cabinetLine: "SEKTION",
        features: ["Full MEP Upgrade", "New Flooring", "Backsplash", "Recessed Lighting"]
      },
      createdAt: new Date()
    },
    {
      title: "IKEA Kitchen with Island",
      location: "Arlington, VA",
      category: "ikea",
      image: "/attached_assets/image_1749359853116.png",
      description: "Spacious IKEA kitchen featuring custom island installation and professional cabinet assembly.",
      details: {
        size: "300 sq ft",
        duration: "3 weeks",
        cabinetLine: "SEKTION",
        features: ["Custom Island", "Breakfast Bar", "Pendant Lighting", "Pull-Out Organizers"]
      },
      createdAt: new Date()
    },
    {
      title: "Luxury IKEA Installation",
      location: "Chevy Chase, MD",
      category: "ikea",
      image: "/attached_assets/image_1749361367462.png",
      description: "High-end IKEA kitchen with premium countertops, custom backsplash, and designer lighting.",
      details: {
        size: "280 sq ft",
        duration: "3.5 weeks",
        cabinetLine: "SEKTION",
        features: ["Premium Countertops", "Designer Lighting", "Wine Storage", "Smart Appliances"]
      },
      createdAt: new Date()
    }
  ];

  // Clear existing portfolio items
  await db.delete(portfolioItems);

  // Insert new portfolio items
  for (const item of portfolioData) {
    await db.insert(portfolioItems).values(item);
  }

  console.log(`Seeded ${portfolioData.length} portfolio items`);
}

// Run the seed function
seedPortfolioItems().then(() => {
  console.log("Portfolio seeding completed");
  process.exit(0);
}).catch((error) => {
  console.error("Error seeding portfolio:", error);
  process.exit(1);
});