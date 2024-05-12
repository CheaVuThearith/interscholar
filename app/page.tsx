import OpportunityCard from "./_components/OpportunityCard";
import SearchBar from "./_components/SearchBar";

export default function Home() {
      return (
            <>
                  <div className="flex flex-col justify-center gap-y-5">
                        <SearchBar />
                        <OpportunityCard
                              description="
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta harum eius accusamus ullam veniam iusto vero. Debitis, recusandae maiores.

    "
                              title="Organization"
                        />
                                                <OpportunityCard
                              description="
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta harum eius accusamus ullam veniam iusto vero. Debitis, recusandae maiores.

    "
                              title="Organization"
                        />                        <OpportunityCard
                        description="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta harum eius accusamus ullam veniam iusto vero. Debitis, recusandae maiores.

"
                        title="Organization"
                  />                        <OpportunityCard
                  description="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta harum eius accusamus ullam veniam iusto vero. Debitis, recusandae maiores.

"
                  title="Organization"
            />                        <OpportunityCard
            description="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta harum eius accusamus ullam veniam iusto vero. Debitis, recusandae maiores.

"
            title="Organization"
      />
                  </div>
            </>
      );
}
