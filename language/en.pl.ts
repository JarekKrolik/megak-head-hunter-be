export const staticText = {
    errors: {
        SupportFilesCsvJson: 'Nie wspierany typ pliku. Wspieramy tylko CSV/JSON.',
        InternalServerError: 'Wewnętrzny błąd serwera.',
    },
    validation: {
        user: {
          invalidToken: 'Invalid register token.',
        },
        AccessDenied: 'Dostęp zabroniony.',
        EmailDoesntExist: 'Podany email nie istnieje.',
        InvalidData: 'Niepoprawne dane.',
        UnauthorizeAccess: 'Nieautoryzowany dostęp.',
        Unauthorized: 'Nieautoryzowany dostęp.',
        UnconfirmedAccount: 'Konto nie zostało powtierdzone.',
        UserDoesntExist: 'Podany użytkownik nie istnieje.',
        UserIsRegistered: 'Użytkownik już zarejestrowany.',
        WrongPassword: 'Niepoprawny login lub hasło.',
        WrongRegisterToken: 'Podany użytkownik nie istnieje.',
        password: {
            toShort: 'Hasło musi zawierać od 8 do 20 znaków. Hasło powinno zawierać małe i wielkie litery, cyfrę i znak specjalny.',
            confirmBeTheSame: 'Podane hasła muszą być takie same.',
        },
        message: {
            DataHasBeenSaved: 'Dane zostały zapisane.',
            DataConfirmed: 'Dane potwierdzone.',
            PasswordChanged: 'Hasło zmienione.',
        },
        Db: {
            DuplicateEntry: 'Zduplikowana wartość: ',
        }
    }
}