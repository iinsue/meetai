import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

import { useAgentsFilters } from "../../hooks/use-agents.filters";

// http://localhost:3000/agents
// http://localhost:3000/agents?search=test

export const AgentsSearchFilter = () => {
  const [filters, setFilters] = useAgentsFilters();

  return (
    <div className="relative">
      <Input
        placeholder="Filter by name"
        className="h-9 w-[200px] bg-white pl-7"
        onChange={(event) => setFilters({ search: event.target.value })}
        value={filters.search}
      />
      <SearchIcon className="text-muted-foreground absolute top-1/2 left-2 size-4 -translate-y-1/2" />
    </div>
  );
};
