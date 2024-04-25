import data from "@/src/components/ParsingsList/ParsingsList-data.json";
import { ParsingListTypes } from "@/src/types/parsingListTypes.ts";
import { AllParsingsType } from "@/src/types/allParsingsType.ts";
import {ParsingsListItem} from "@/src/components/shared/ParsingsListItems/ParsingsListItem.tsx";
export const ParsingsList = () => {
    return (
        <div>
            {
                data.map((item: ParsingListTypes) => (
                    <div className={`py-10`}>
                        <div className={`flex flex-col md:flex-row items-center justify-between mb-10`}>
                            <h2 className={`font-bold text-5xl max-w-[425px]`}>{item.title}</h2>
                            <p className={`max-w-[510px] text-[18px] self-end`}>{item.specification}</p>
                        </div>
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
                            {
                                item.data?.map((value:AllParsingsType, index:number) => (
                                    <ParsingsListItem item={value} index={index}/>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
