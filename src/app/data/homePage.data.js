export default async function getFrontPageData() {
    //TODO: use qs for more readable queries
  const res = await fetch('http://localhost:1337/api/front-page?fields[0]=headline&fields[1]=Subheadline&populate[0]=hero', { next: { revalidate: 3600 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
    return res.json()
}