import data from './allParsings-data.json';
import { AllParsingsType } from "@/src/types/allParsingsType.ts";
import { ParsingsListItem } from "@/src/components/shared/ParsingsListItems/ParsingsListItem.tsx";
import {Link} from "react-router-dom";

export const AllParsings = () => {
    return (
        <section className={`py-10`}>
            <div className={`flex flex-col md:flex-row justify-between items-center`}>
                <h2 className={`font-bold text-3xl sm:text-4xl`}>Наши парсеры</h2>
                <Link to={`/parsings-list`} className={`font-medium text-[17px] text-black hover:text-blue-500 flex items-center md:text-xl gap-2 hover:bg-slate-200 max-w-[350px] rounded-xl px-2 transition-all duration-500`}>Перейти ко всем паресерам
                    <span>
                        <img src="https://uploads-ssl.webflow.com/61ea8fed046f701b672b404d/61ea8fed046f70e6172b413d_Group%2084.svg" alt="arrow" />
                    </span>
                </Link>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
                {data.map((item: AllParsingsType, index: number) => (
                    <ParsingsListItem item={item} index={index} key={index} />
                ))}
            </div>
        </section>
    )
}