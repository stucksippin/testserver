export async function GET(request) {
    const { searchParams } = new URL(request.url)
    console.log(searchParams);

    return Response.json({}, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    })
}