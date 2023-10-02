# Important note

I hold no responsibility for any illicit activities carried out using this tool. There are numerous typo generators available on platforms like GitHub and other public repositories. This tool isn't particularly groundbreaking; I developed it primarily to encapsulate the logic within my preferred structure, offering flexibility to incorporate additional methods in the future if desired.

# Installation

To install the blunderbus-cli, execute the following command after cloning the repository:

`$ sudo npm install blunderbus-cli -g`

Once installed, the tool can be used via the blunderbus command.

# Usage

```bash
blunderbus [options]
```


# Options

1. **-f, --file <value>**:  File Import
    
    i. Use this option to specify a file containing string for which you want to generate typos.
        
    ii. Default: "" (empty string).
        
    iii. Example:

    ```bash    
    blunderbus -f /path/to/strings
    ```
2. **-s, --string <value>**: String Input

    i. Manually provide a string for which to generate typos.
    
    ii. Default: "" (empty string).
    
    iii. Example:
    ```bash
    blunderbus -s "hello"
    ```

3. **Standard Input**:

    i. Provide list of strings via standard input
    
    ii. Default: []

    iii. Example:
    ```bash
    echo "string" | blunderbus
    ```
    or
    ```bash
    cat /path/to/file | blunderbus
    ```

4. **-t, --type <value>:**

    i. Specifies the type of typo generation mechanism to use.

    ii. Default: "all"

    iii. Supported Values:
        
    - **substitute**
    - **cognitiveErrors**
    - **transposition**
    - **omission**
    - **insertion**
    - **all**

    iv. Example:

    ```bash
    blunderbus -s "example" -t omission
    ```
5. **-h, --help:** Display Help


