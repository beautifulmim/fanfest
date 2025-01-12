export interface Auth {
    jwt:  string;
    user: User;
}

export interface User {
    fullName:     string;
    avatar:       string;
    id:           string;
    interests:    any[];
    characters:   Character[];
    updates:      Update[];
    deleted:      boolean;
    isSuperAdmin: boolean;
}

export interface Character {
    id:          string;
    name:        string;
    isMain:      boolean;
    token:       Token;
    corporation: Corporation;
}

export interface Corporation {
    id:       number;
    name:     string;
    alliance: Alliance;
}

export interface Alliance {
    id:   number;
    name: string;
}

export interface Token {
    accessToken:  string;
    refreshToken: string;
    lastUsed:     Date;
    isActive:     boolean;
}

export interface Update {
    timestamp: Date;
    actor:     string;
    sourceIP:  string;
    action:    string;
}

export interface PrizeAns {
    prize: Prize
}

export interface Prize {
    id:     number;
    name:   string;
    qty:    number;
}

export interface UserPrizes {
    char:   Char;
    corp:   Corp;
    prizes: UserPrize[];
}

export interface Char {
    id:   string;
    name: string;
}

export interface Corp {
    id:       number;
    name:     string;
    alliance: Alliance;
}

export interface Alliance {
    id:   number;
    name: string;
}

export interface UserPrize {
    id:     string;
    code:   string;
    typeID: number;
    name:   string;
    qty:    number;
}