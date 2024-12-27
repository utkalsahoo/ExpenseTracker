import Card from "../components/card";
import Table from "../components/table";
import { recentItems } from "../constants/recent";

export default function Dashboard() {
  let value = {
    heading: "Recent Expense",
  };
  return (
    // <Container>
    <div>
      <Card heading="Recent Expense">
        <Table items={recentItems}></Table>
      </Card>
    </div>
    // </Container>
  );
}
