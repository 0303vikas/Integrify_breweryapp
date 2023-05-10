import { GetBrewerieType } from "./AdapterRequests"

export interface DisplayDataProps {
    data: GetBrewerieType[]
    nextBtn:JSX.Element | null
    prevBtn: JSX.Element | null
    pageNo: number
}