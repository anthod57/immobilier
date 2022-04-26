export const POST_SCHEMA = {
    title: { type: "string" },
    offerType: { type: "string", enum: ["buy", "rent"] },
    propertyType: { type: "string", enum: ["appartment", "house"] },
    date: { type: "any", default: (schema, field, parent, context) => new Date() },
    description: { type: "string" },
    price: { type: "number" },
    city: { type: "string" },
    address: { type: "string" },
    rooms: { type: "number" },
    bedrooms: { type: "number" },
    bathrooms: { type: "number" },
    surface: { type: "number" },
    land_surface: { type: "number" },
    images: { type: "array", optional: true },
    postedBy : { type: "string" }
}

export const GET_SCHEMA = {
    getBy: { type: "string", enum: ["id", "offerType", "user"] },
    value: { type: "string" , items: { type: "string" }},
    filters: {
        type: "array", items: {
            type: "object",
            props: {
                filterBy: { type: "string" },
                value: { type: "string" },
            }
        },
        optional: true
    },
    limit: { type: "any", optional: true }
}
export const PUT_SCHEMA = {
    id: { type: "string" },
    offer: { type: "object", props: POST_SCHEMA }
}

export const DELETE_SCHEMA = {
    id: { type: "string" }
}