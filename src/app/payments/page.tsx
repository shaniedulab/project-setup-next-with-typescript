import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return[
        { id: "1", amount: 50, status: "pending", email: "user1@example.com" },
        { id: "2", amount: 120, status: "failed", email: "user2@example.com" },
        { id: "3", amount: 80, status: "pending", email: "user3@example.com" },
        { id: "4", amount: 200, status: "success", email: "user4@example.com" },
        { id: "5", amount: 30, status: "pending", email: "user5@example.com" },
        { id: "6", amount: 150, status: "processing", email: "user6@example.com" },
        { id: "7", amount: 90, status: "pending", email: "user7@example.com" },
        { id: "8", amount: 180, status: "failed", email: "user8@example.com" },
        { id: "9", amount: 40, status: "pending", email: "user9@example.com" },
        { id: "10", amount: 100, status: "processing", email: "user10@example.com" },
        { id: "5", amount: 30, status: "pending", email: "user5@example.com" },
        { id: "6", amount: 150, status: "processing", email: "user6@example.com" },
        { id: "7", amount: 90, status: "pending", email: "user7@example.com" },
        // ... continue the pattern with more objects as needed
      ]
      
  }
   
  export default async function DemoPage() {
    const data = await getData()
   
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    )
  }