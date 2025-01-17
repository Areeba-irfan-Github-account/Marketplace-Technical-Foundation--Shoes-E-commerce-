// Product Schema
export const productSchema = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      { name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() },
      { name: "description", title: "Description", type: "text" },
      { name: "price", title: "Price", type: "number", validation: (Rule) => Rule.required() },
      { name: "category", title: "Category", type: "string", validation: (Rule) => Rule.required() },
      { name: "stock", title: "Stock", type: "number", validation: (Rule) => Rule.required() },
      { name: "images", title: "Images", type: "array", of: [{ type: "image" }], validation: (Rule) => Rule.required() },
      { name: "created_at", title: "Created At", type: "datetime", initialValue: new Date().toISOString() },
      { name: "updated_at", title: "Updated At", type: "datetime" }
    ]
  };
  
  // Order Schema
  export const orderSchema = {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      { name: "customer_id", title: "Customer ID", type: "reference", to: [{ type: "customer" }], validation: (Rule) => Rule.required() },
      { 
        name: "products", 
        title: "Products", 
        type: "array", 
        of: [{
          type: "object",
          fields: [
            { name: "product_id", title: "Product ID", type: "reference", to: [{ type: "product" }], validation: (Rule) => Rule.required() },
            { name: "quantity", title: "Quantity", type: "number", validation: (Rule) => Rule.required() }
          ]
        }],
        validation: (Rule) => Rule.required()
      },
      { name: "total_price", title: "Total Price", type: "number", validation: (Rule) => Rule.required() },
      { name: "status", title: "Status", type: "string", options: { list: ["Pending", "Shipped", "Delivered"] }, validation: (Rule) => Rule.required() },
      { name: "created_at", title: "Created At", type: "datetime", initialValue: new Date().toISOString() },
      { name: "updated_at", title: "Updated At", type: "datetime" }
    ]
  };
  
  // Customer Schema
  export const customerSchema = {
    name: "customer",
    title: "Customer",
    type: "document",
    fields: [
      { name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() },
      { name: "email", title: "Email", type: "string", validation: (Rule) => Rule.required() },
      { name: "phone", title: "Phone", type: "string" },
      { 
        name: "address", 
        title: "Address", 
        type: "object", 
        fields: [
          { name: "line1", title: "Line 1", type: "string", validation: (Rule) => Rule.required() },
          { name: "line2", title: "Line 2", type: "string" },
          { name: "city", title: "City", type: "string", validation: (Rule) => Rule.required() },
          { name: "state", title: "State", type: "string", validation: (Rule) => Rule.required() },
          { name: "zip_code", title: "ZIP Code", type: "string", validation: (Rule) => Rule.required() },
          { name: "country", title: "Country", type: "string", validation: (Rule) => Rule.required() }
        ]
      },
      { name: "created_at", title: "Created At", type: "datetime", initialValue: new Date().toISOString() },
      { name: "updated_at", title: "Updated At", type: "datetime" }
    ]
  };
  
  // Shipment Tracking Schema
  export const shipmentTrackingSchema = {
    name: "shipment_tracking",
    title: "Shipment Tracking",
    type: "document",
    fields: [
      { name: "order_id", title: "Order ID", type: "reference", to: [{ type: "order" }], validation: (Rule) => Rule.required() },
      { name: "carrier", title: "Carrier", type: "string", validation: (Rule) => Rule.required() },
      { name: "tracking_number", title: "Tracking Number", type: "string", validation: (Rule) => Rule.required() },
      { name: "status", title: "Status", type: "string", options: { list: ["In Transit", "Delivered"] }, validation: (Rule) => Rule.required() },
      { name: "estimated_delivery", title: "Estimated Delivery", type: "date" },
      { name: "current_location", title: "Current Location", type: "string" },
      { name: "updated_at", title: "Updated At", type: "datetime" }
    ]
  };
  
  // Payment Schema
  export const paymentSchema = {
    name: "payment",
    title: "Payment",
    type: "document",
    fields: [
      { name: "order_id", title: "Order ID", type: "reference", to: [{ type: "order" }], validation: (Rule) => Rule.required() },
      { name: "customer_id", title: "Customer ID", type: "reference", to: [{ type: "customer" }], validation: (Rule) => Rule.required() },
      { name: "amount", title: "Amount", type: "number", validation: (Rule) => Rule.required() },
      { name: "payment_method", title: "Payment Method", type: "string", options: { list: ["Credit Card", "PayPal"] }, validation: (Rule) => Rule.required() },
      { name: "status", title: "Status", type: "string", options: { list: ["Paid", "Failed", "Refunded"] }, validation: (Rule) => Rule.required() },
      { name: "transaction_id", title: "Transaction ID", type: "string" },
      { name: "created_at", title: "Created At", type: "datetime", initialValue: new Date().toISOString() }
    ]
  };
  
  // Customization Schema
  export const customizationSchema = {
    name: "customization",
    title: "Customization",
    type: "document",
    fields: [
      { name: "product_id", title: "Product ID", type: "reference", to: [{ type: "product" }], validation: (Rule) => Rule.required() },
      { name: "order_id", title: "Order ID", type: "reference", to: [{ type: "order" }], validation: (Rule) => Rule.required() },
      { 
        name: "custom_design", 
        title: "Custom Design", 
        type: "object", 
        fields: [
          { name: "color", title: "Color", type: "string" },
          { name: "size", title: "Size", type: "string", validation: (Rule) => Rule.required() },
          { name: "text", title: "Custom Text", type: "string" },
          { name: "patterns", title: "Patterns", type: "array", of: [{ type: "string" }] },
          { name: "additional_images", title: "Additional Images", type: "array", of: [{ type: "image" }] }
        ]
      },
      { name: "price_adjustment", title: "Price Adjustment", type: "number" },
      { name: "created_at", title: "Created At", type: "datetime", initialValue: new Date().toISOString() }
    ]
  };
  