export interface CountryCode {
    code: string,
    name: string
}

export interface category {
    code: string,
    name: string
}

export interface news {
    ncountry: string,
    ncategory: string
}

export interface newsresult {
    nrtitle: string,
    nrauthor: string,
    nrdescription: string,
    nrimage:string
}