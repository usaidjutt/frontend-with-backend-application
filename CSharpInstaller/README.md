# C# / .NET Installer with WiX Toolset v4

This directory contains a complete example of how to build a Windows installer (`.msi`) for a C#/.NET application using **WiX Toolset v4** and **Visual Studio**.

---

## Prerequisites

| Tool | Version | Download |
|---|---|---|
| Visual Studio | 2022 or later | [visualstudio.microsoft.com](https://visualstudio.microsoft.com/) |
| .NET SDK | 8.0 or later | [dot.net](https://dotnet.microsoft.com/download) |
| HeatWave for VS2022 extension | latest | [marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=FireGiant.FireGiantHeatWaveDev17) |

> **HeatWave** is the Visual Studio extension that adds WiX v4 project templates and design-time support. Install it from the Visual Studio Marketplace before opening the solution.

---

## Project Structure

```
CSharpInstaller/
├── CSharpInstaller.sln       # Visual Studio solution (both projects)
├── CSharpApp/
│   ├── CSharpApp.csproj      # .NET 8 console application
│   └── Program.cs            # Application entry point
├── Installer/
│   ├── Installer.wixproj     # WiX v4 installer project
│   └── Package.wxs           # Installer definition (files, shortcuts, registry)
└── README.md                 # This file
```

---

## Step-by-Step: Build the Installer in Visual Studio

### 1 – Install the HeatWave extension

1. Open Visual Studio.
2. Go to **Extensions → Manage Extensions**.
3. Search for **HeatWave** and install it.
4. Restart Visual Studio when prompted.

### 2 – Open the solution

```
File → Open → Project/Solution → CSharpInstaller.sln
```

### 3 – Restore NuGet packages

Visual Studio restores packages automatically on first build, or you can run:

```
dotnet restore
```

### 4 – Build the installer

1. Set the solution configuration to **Release** and the platform to **x64**.
2. Right-click the **Installer** project in Solution Explorer and choose **Build**.
3. Visual Studio will:
   - Compile `CSharpApp` in Release mode.
   - Run WiX to package the compiled output into an MSI.

The finished installer is placed at:

```
Installer\bin\Release\CSharpAppSetup.msi
```

---

## Step-by-Step: Build from the Command Line

```bash
# Restore WiX SDK NuGet package
dotnet restore CSharpInstaller.sln

# Build everything (app + installer) in Release mode for x64
dotnet build CSharpInstaller.sln -c Release -p:Platform=x64
```

The MSI is produced at `Installer/bin/Release/CSharpAppSetup.msi`.

---

## Install and Uninstall

**Install silently:**

```cmd
msiexec /i CSharpAppSetup.msi /qn
```

**Install with the standard GUI:**

```cmd
msiexec /i CSharpAppSetup.msi
```

**Uninstall:**

```cmd
msiexec /x CSharpAppSetup.msi /qn
```

---

## Customizing the Installer

| What to change | Where |
|---|---|
| App name, version, manufacturer | `Installer/Package.wxs` – `<Package>` attributes |
| Upgrade code (must be unique per product) | `Installer/Package.wxs` – `UpgradeCode` GUID |
| Files to include | `Installer/Package.wxs` – `<ComponentGroup Id="ProductComponents">` |
| Start Menu shortcut name | `Installer/Package.wxs` – `<Shortcut Name="...">` |
| Install directory | `Installer/Package.wxs` – `<Directory Id="INSTALLFOLDER">` |

### Generating a new Upgrade Code GUID

Every distinct product **must** have its own `UpgradeCode`. You can generate one with:

```powershell
[System.Guid]::NewGuid().ToString()
```

Paste the result into the `UpgradeCode` attribute in `Package.wxs`.

---

## How Major Upgrades Work

The `<MajorUpgrade>` element in `Package.wxs` tells Windows Installer to automatically remove any older version of the product when a newer MSI is installed. No manual uninstall is required.

---

## Further Reading

- [WiX Toolset v4 documentation](https://wixtoolset.org/docs/intro/)
- [WiX GitHub repository](https://github.com/wixtoolset/wix)
- [HeatWave Visual Studio extension](https://www.firegiant.com/wix/heatwave/)
- [MSBuild WiX project SDK reference](https://wixtoolset.org/docs/reference/msbuild/)
